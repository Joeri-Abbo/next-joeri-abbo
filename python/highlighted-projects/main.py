import json


def update_home_projects(lang):
    with open('../../public/rest/{}/projects.json'.format(lang)) as f:
        data = json.load(f)
    with open('../../public/rest/{}/home/projects.json'.format(lang), 'w') as fp:
        json.dump(data[:3], fp)


if __name__ == '__main__':
    for lang in ['en', 'nl']:
        update_home_projects(lang)
