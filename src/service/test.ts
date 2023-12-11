
import { Test } from "../model/testmodel";

type TestRessource = {
    owner: string,
    name: string
};
export async function createTest(testRessource: TestRessource) {
    await Test.create({
        owner: testRessource.owner,
        name: testRessource.name
    })
}