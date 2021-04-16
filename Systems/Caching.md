# Caching

**Cache**\
A piece of hardware or software that stores data, typically meant to retrieve data faster than otherwise.
Often used to store responses to network requests, or results of computationally-long operations.
Data in a cache can become **stale** if the main source of truth for that data gets updated and the cache doesn't

Can cache at multiple levels of a system: client, server, database

**Examples**\
Repetitive network requests can be cached. That way we don't need to repeatedly make the same requests.

**Cache Hit**\
When requested data is found in a cache.

**Cache miss**\
When requested data could have been found in a cache but isn't.
_ex: If a server goes down, our load balancer will have to forward requests to a new server, which will result in cache misses._
