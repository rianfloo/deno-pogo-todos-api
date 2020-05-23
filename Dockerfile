FROM hayd/alpine-deno:1.0.1

EXPOSE 8080

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

RUN deno cache server.ts

# Added to ENTRYPOINT of base image.
CMD ["run", "--allow-net", "--allow-read", "--allow-write", "server.ts"]