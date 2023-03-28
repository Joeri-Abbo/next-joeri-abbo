import json


def update_home_projects(lang):
    with open(f'../../public/rest/{lang}/projects.json') as f:
        data = json.load(f)[:3]
    with open(f'../../public/rest/{lang}/home/projects.json', 'w') as fp:
        json.dump(data, fp)


if __name__ == '__main__':
    for lang in ['en', 'nl']:
        update_home_projects(lang)
