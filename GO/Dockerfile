FROM golang:latest AS builder
WORKDIR /app
COPY hello.go /app
RUN go build hello.go

FROM scratch
COPY --from=builder /app/hello /app/hello
ENTRYPOINT ["/app/hello"]
