import requests
import json

if __name__ == '__main__':
    badges = []

    badges_raw = requests.get('https://www.credly.com/users/joeri-abbo/badges.json')
    if badges_raw.ok:
        badges_data = badges_raw.json().get('data')
        badges = [{
            'name': badge.get('badge_template').get('name'),
            'image_url': badge.get('badge_template').get('image').get('url'),
            'id': badge.get('id'),
        } for badge in badges_data]
        for badge in badges:
            print(badge.get('name'))

    with open('../../../public/3parties/credly.json', 'w') as fp:
        json.dump(badges, fp)

    print('Done')
