

1. Komenda `docker images`: 
![01](images/1-running-containers/screenshot%2001.png)

2. Komenda `docker search ubuntu`: 
![02](images/1-running-containers/screenshot%2002.png)

3. Komenda `docker pull ubuntu:22.04`: 
![03](images/1-running-containers/screenshot%2003.png)

4. Komenda `docker pull ubuntu:22.10`: 
![04](images/1-running-containers/screenshot%2004.png)

5. Komenda `docker images` (weryfikacja pobranych obrazów): 
![05](images/1-running-containers/screenshot%2005.png)

6. Komenda `docker rmi e322f4808315` oraz `docker rmi ef745ee6edd4`: 
![06](images/1-running-containers/screenshot%2006.png)

7. Komenda `docker images` (stan po usunięciu): 
![07](images/1-running-containers/screenshot%2007.png)

8. Komunikat o braku możliwości wykonania polecenia (używane kontenery): 
![08](images/1-running-containers/screenshot%2008.png)

9. Komenda `docker run ubuntu:22.04 /bin/echo 'Hello world!'`: 
![09](images/1-running-containers/screenshot%2009.png)

10. Komenda `docker ps`: 
![10](images/1-running-containers/screenshot%2010.png)

11. Komenda `docker run -it ubuntu:22.04 /bin/bash` (wejście do powłoki kontenera): 
![11](images/1-running-containers/screenshot%2011.png)

12. Praca wewnątrz kontenera (komendy `ls -l`, `pwd`, `hostname`): 
![12](images/1-running-containers/screenshot%2012.png)

13. Edycja pliku wewnątrz kontenera (`echo` i `cat`): 
![13](images/1-running-containers/screenshot%2013.png)

14. Wyjście z kontenera komendą `exit`: 
![14](images/1-running-containers/screenshot%2014.png)

15. Komenda `docker ps -a` (weryfikacja statusu Exit): 
![15](images/1-running-containers/screenshot%2015.png)

16. Komenda `docker run -d --name moj-kontener ubuntu:22.04 sleep 100` (tryb detached): 
![16](images/1-running-containers/screenshot%2016.png)

17. Komenda `docker ps` (weryfikacja działającego kontenera w tle): 
![17](images/1-running-containers/screenshot%2017.png)

18. Komenda `docker logs moj-kontener`: 
![18](images/1-running-containers/screenshot%2018.png)

19. Komenda `docker stop moj-kontener`: 
![19](images/1-running-containers/screenshot%2019.png)

20. Komenda `docker rm moj-kontener` (usuwanie kontenera): 
![20](images/1-running-containers/screenshot%2020.png)

21. Komenda `docker ps -a` (sprawdzenie listy wszystkich kontenerów po usuwaniu): 
![21](images/1-running-containers/screenshot%2021.png)

22. Komenda `docker system prune` (czyszczenie nieużywanych zasobów): 
![22](images/1-running-containers/screenshot%2022.png)

23. Komenda `docker images` oraz `docker ps -a` (weryfikacja końcowa czystego środowiska): 
![23](images/1-running-containers/screenshot%2023.png)
