import { faker } from "@faker-js/faker/locale/ru";

export const generateWords = (count: number) => {
    return faker.lorem.words(count).toLowerCase();
};
