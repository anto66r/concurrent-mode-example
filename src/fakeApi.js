const posts = () => {
  console.log(`fetching post list`)
  return new Promise(
    resolve => setTimeout(
      () => {
        console.log(`done fetching post list`);
        resolve(fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json()))
      },
      2000
    )
  )}

const postDetails = id => {
  console.log(`fetching post ${id}`)
  return new Promise(
    resolve => setTimeout(
      () => {
        console.log(`done fetching post ${id}`);
        if (!id) {
          resolve({})
          return
        }
        resolve(
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response =>
            response.json()
          )
        )
      },
      2000
    )
  )}


function wrapPromise(promise) {
  let status = "pending"
  let result
  let suspender = promise.then(
    r => {
      status = "success"
      result = r
    },
    e => {
      status = "error"
      result = e
    }
  )
  return {
    read() {
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result
      }
      return result
    }
  }
}

const postsResource = () => wrapPromise(posts())
const postDetailsResource = id => wrapPromise(postDetails(id))

export { postDetailsResource, postsResource }
