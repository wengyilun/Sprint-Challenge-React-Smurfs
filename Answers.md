1.  Explain the differences between `client-side routing` and `server-side routing`.

Routing is the way to take user to a location on the world wide web where the resource that the user has requested  
are located. Onc thing that's the same between client-side and Server-side routing is that the initial data are 
loaded from the server. The main difference is that with server-side routing each subsequent request, big or small, will also need
all need to make a trip to the server and upon data received, the entire page will have to be repainted which is a very resouce
intensive act and the user will experience a lot of disruption due to annoying webpage reloads and repaint. client-side
routing on the other hand caches the data from the initial load to the memory with the help of Google's V8 AJAX engine,
the subsequent server request is handled by the engine and only the data that's requested by the user are returned, not the 
entire thing, so no entire page refreshing issue.


1.  What does HTTP stand for?
Hypertext Transportation Protocol

1.  What does CRUD stand for?
These is a paradigm common used in web app development. It stands for Create, Read, Update and Delete. They are used to add data, read data, update
data and delete data on the server.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
C - POST
R - GET
U - PUT
D - DELETE


1.  Mention three tools we can use to make AJAX requests
a. axios library
b. fetch API
c. Jquery's Ajax() method
