let json = {
  'status': '200',
  'message': '操作成功',
  'sign': '99b93ddf5e5141bfa4c84e4afe76975d',
  'data': {
    'nodes': [{
      'id': 'fed7a1d6-e788-4649-b17a-414dbdc4ece3',
      'uid': 186568944,
      'name': '广汽丰田汽车有限公司',
      'type': 'E',
      'is_key': true
    }, {
      'id': '1541ed8f-a59b-4515-8851-81b816366816',
      'uid': 182744693,
      'name': '广州广汽租赁有限公司',
      'type': 'E',
      'is_key': true
    }, {
      'id': '492a0421-61e4-46ff-84c8-40c0dc0efb20',
      'uid': 162463247,
      'name': '广州汽车集团股份有限公司',
      'type': 'E',
      'is_key': false
    }, {
      'id': '94f86ee6-1152-4385-89bb-6739d681f0b7',
      'uid': 189153267,
      'name': '广汽商贸有限公司',
      'type': 'E',
      'is_key': false
    }],
    'links': [{
      'source_id': 162463247,
      'target_id': 186568944,
      'label': '股东'
    }, {
      'source_id': 162463247,
      'target_id': 189153267,
      'label': '股东'
    }, {
      'source_id': 189153267,
      'target_id': 182744693,
      'label': '股东'
    }]
  }
}
export default json
