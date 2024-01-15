import {detectPrng, factory as ulidFactory} from "ulid";

const ulid = ulidFactory(detectPrng(true));

export function createUlid(): string {
    return ulid();
}
