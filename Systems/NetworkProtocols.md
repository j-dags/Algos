Protocol

- Agreed up set of rules when two parties interact
- e.g. when you shake hands with a friend? hand shake, bump, dap? what's the protocol?

Network Protocol

- how machines communicate
- type, format, order, and whether there should be a response, how to respond

IP: Internet Protocol

- outlines how almost all machine-to-machine communications should happen
- TCP, UDP, HTTP are built on IP
- modern internet runs on IP
- when machines sent data to each other, data is sent as an IP packet
- IP packet: fundamental unit of data transfer

IP Packet

- header: contains useful information about the packet. source IP address, destination IP address, packet size, IP protocol version (IPv4, IPv6). Between 20-60 bytes sizes
- TCP header: contains important information about ordering of packets
- data: data to be sent to client/server
- 2^16 bytes max. ~0.065MB
- Data will be split into packets
- Data may be loss over transmission or jumbled order

TCP: Transmission Control Protocol

- Sends packets of data in an reliable, error-free way
- Send arbitrarily long pieces of data
- TCP built on top of IP
- more powerful and functional wrapper around IP
- still lacks robust framework for developers to use (I guess still too low level)

TCP Handshake

- client and server initiate handshake
- handshake: send a few packets to establish a connection

HTTP: hypertext transfer protocol

- built on top of TCP
- higher level abstractions
- abstraction: request, response paradigm
- one machine sends a request, the other machine sends a response
- dont have to think about IP/TCP, just think of req/res

Request

- host/port: describe destination
- method: describe the purpose of the request (get, put, post, etc.)
- path: where you start to have logic in your server. Server might have multiple paths for different services. Depending on the path, different logic will be applied
- headers: Important metadata about the request
- body: data that req is sending

Response

- similar format
- status code: describes type of status
