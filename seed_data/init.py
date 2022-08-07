import requests
import json

def getresult(url):
    response = requests.get(url)
    response_json = json.loads(response.text)
    print(json.dumps(response_json, indent=4))
    return response_json

requests.post('http://127.0.0.1:3333/users/', data={'name': 'userA'})
requests.post('http://127.0.0.1:3333/users/', data={'name': 'userB'})
requests.post('http://127.0.0.1:3333/users/', data={'name': 'userC'})
requests.post('http://127.0.0.1:3333/users/', data={'name': 'userD'})
users = getresult('http://127.0.0.1:3333/users/')

user1 = users[0]['_id']
print(user1)

requests.post('http://127.0.0.1:3333/plans/',
data={  
  'title': 'planA',
  'description': 'trip of planA',
  'createdBy': '62ef2264c1ca02c3b54503f9',
  'places': [
    {
    'name': '渋谷駅',
    'time': '11:40',
    'description': 'placeA description'
    },
    {
    'name': '新宿駅',
    'time': '12:40',
    'description': 'placeB description'
    },
     {
    'name': '池袋駅',
    'time': '13:40',
    'description': 'placeC description'
    }
  ],
  'routes': [
    {
        'duration': '600',
        'distance': '600',
        'endAddress': '東京都渋谷区道玄坂1丁目19-1',
        'startAddress': '東京都新宿区新宿3丁目38-1'
    },
    {
        'duration': '600',
        'distance': '600',
        'endAddress': '東京都新宿区新宿3丁目38-1',
        'startAddress': '東京都豊島区南池袋1丁目1-2'
    }
    ]
  })
plans = getresult('http://127.0.0.1:3333/plans/')

