FROM amazoncorretto:8
EXPOSE 8080
WORKDIR /usr/src/app
RUN yum install -y dos2unix
COPY . .
RUN dos2unix mvnw && chmod +x mvnw
RUN ./mvnw package
CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]