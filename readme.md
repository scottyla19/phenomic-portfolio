# Notes

## Service Worker with react
I was able to simplify things by using `sw-precache` for the app shell and adding the optional setting of `runtimeCaching` for the blog section to use networkFirst.
```javascript
runtimeCaching: [
  {
    urlPattern: /\/blog.*/,
    handler: "networkFirst",
    options: {
      cache: {
        maxEntries: 10,
        name: "blog-cache"
      }
    }
  }
]
```
I also had to put the registration for the service-worker in the `componentDidMount()`  function of the layout component since we only have access to the DOM once the component mounts. We need the DOM to access the `window.navigator`
