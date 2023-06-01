import { Kafka } from "kafkajs";

const kafka = new Kafka({
    brokers: ['kind-teal-6150-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'a2luZC10ZWFsLTYxNTAkSdMxD89mfZzNdnBrYEDa7rTCvJ93rm_NWbmt4RsmJn4',
      password: 'b8db36d8e7db471883c63a868cfc9d2a',
    },
    ssl: true,
  })

  export {kafka};