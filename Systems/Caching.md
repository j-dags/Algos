# Caching

**Cache**\
A piece of hardware or software that stores data, typically meant to retrieve data faster than otherwise.

- Often used to store responses to network requests, or results of computationally-long operations.
- Data in a cache can become **stale** if the main source of truth for that data gets updated and the cache doesn't
- Can cache at multiple levels of a system: client, server, database

**Examples**\
Repetitive network requests can be cached. That way we don't need to repeatedly make the same requests.

1. If you go to algoexpert and click on questions, you may see a loading bar. But those questions are saved to the client/browser. So when coming back to that page you won't need to make another server request.
2. Running code on algoexpert: code solutions are cached.

**Cache Hit**\
When requested data is found in a cache.

**Cache miss**\
When requested data could have been found in a cache but isn't.\
_ex: If a server goes down, our load balancer will have to forward requests to a new server, which will result in cache misses._

**Write though cache**\
User post/edit will write data to cache and database at the same time. That way cache and db is synced. Downside is that we still gotta ping the db.

**Write back cache**\
User network request will update the cache and only the cache. Now, the cache and db are out of sync. But behind the scenes, the system will asynchronously update the database.

**STALENESS**\
Different features require different levels of caching. As an example, youtube comments should not be stale. If a user changed their comment, but that comment is not updated, then other user's can interact and respond to stale data. That's no good. But video watch count isn't as important. It doesn't really matter how many views a video has, no other systems are dependant on that information.
