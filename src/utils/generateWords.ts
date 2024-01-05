import { faker } from "@faker-js/faker/locale/en";

export const generateWords = (count: number) => {
    return faker.lorem.words(count).toLowerCase();
};
