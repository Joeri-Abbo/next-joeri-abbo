import json


def update_home_timeline(lang):
    with open('../../public/rest/{}/timeline.json'.format(lang)) as f:
        data = json.load(f)
    with open('../../public/rest/{}/home/timeline.json'.format(lang), 'w') as fp:
        json.dump(data[:3], fp)


if __name__ == '__main__':
    for lang in ['en', 'nl']:
        update_home_timeline(lang)
