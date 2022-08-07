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
users = getresult('http://127.0.0.1:3333/users/')

user1 = users[0]['_id']

print(user1)
