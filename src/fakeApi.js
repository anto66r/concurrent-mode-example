const posts = () => new Promise(
    resolve => setTimeout(
      () => resolve(fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())),
      2000
    )
  )

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

export default () => ({
  posts: wrapPromise(posts())
})