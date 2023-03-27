import requests
import json

if __name__ == '__main__':
    vendors = [
        'joeriabbo',
        'joeri-abbo',
    ]

    packages = []
    packages_processed = []

    for vendor in vendors:
        packages_list = requests.get('https://packagist.org/packages/list.json?vendor=' + vendor).json().get(
            'packageNames')
        if packages_list:
            packages.extend(packages_list)

    if packages:
        print('Found {0} packages to fetch'.format(len(packages)))
        for package in packages:
            print('Fetching package {0}'.format(package))
            package_data = requests.get('https://packagist.org/packages/' + package + '.json').json().get('package')

            packages_processed.append({
                'name': package_data.get('name'),
                'description': package_data.get('description'),
                'downloads': package_data.get('downloads').get('total'),
                'url': 'https://packagist.org/packages/' + package_data.get('name'),
                'github_url': package_data.get('repository'),
                'versions': list(package_data.get('versions').keys())
            })

        # Sort the packages based on downloads
        packages_processed = sorted(packages_processed, key=lambda k: k['downloads'], reverse=True)

        # Filter out packages with 0 downloads
        packages_processed = [p for p in packages_processed if p['downloads'] > 0]

        with open('../../../public/3parties/packagist.json', 'w') as fp:
            json.dump(packages_processed, fp)

        print('Done')
    else:
        print('No packages found')
        exit(1)
