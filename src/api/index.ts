/**
async function createTodo() {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT5_nREmPe9B', // KDT 5기 APIKEY 입니다!
      'username': 'KDT5_ParkYoungWoong'
    },
    body: JSON.stringify({
      title: '아침 먹기!'
    })
  })
  const json = await res.json()
  console.log(json)
  return json
}
 */
// Method : post (Create)
// curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos

// Method : get (Read)
// curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos

// Method : put (Update)
// curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId

// Method : delete  (Delete)
// curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
