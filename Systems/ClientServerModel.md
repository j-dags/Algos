Foundation of modern internet.

What happens when you go to a URL?

Definitions:
Client: something, a machine, that speaks to a server
Server: a machine, that listens for clients, and speaks back to them
speak: send/request data

EX:
Client - Browser
Server - AlgoExpert

Client doesn't know what server is. It will just request information and get that information back. Client does a DNS query to find the IP address of the server.

DNS query: request to a specific set of servers. Will return AlgoExpert's IP address.
IP Address: like a mailbox an entity grants to a machine.

Now my client has the IP address, it will send an HTTP request.

HTTP:

- way to send information that server will understand
- info sent as packets
- client sends source address (for response)

PORT:

- server is listening on a specific port
- client needs to specify the port
- allows multiple programs to listen on the same machine without colliding
