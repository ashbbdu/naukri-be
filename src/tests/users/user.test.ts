import { describe, expect, test, vi } from 'vitest';
import request from "supertest";
import { app } from '../..';
import { prismaClient } from '../../__mocks__/db';

vi.mock('../../db');

describe("/POST create user", () => {
    test("should be able to create user successfully", async () => {
        prismaClient.user.create.mockResolvedValue({
            id: 9,
            email: 'ashishsrivastava.bbdu1111@gmail.com',
            firstName: 'Ashish',
            lastName: 'Srivastava',
            organisation: 'Compunnel Inc',
            profilePic: 'abc',
            currentLocation: 'Noida',
            createdAt: new Date("2024-09-02T13:08:50.619Z"),
            updatedAt: new Date("2024-09-02T13:08:50.619Z")
        });


        const res = await request(app).post("/api/v1/user/createuser").send({
            email: "ashishsrivastava.bbdu1111@gmail.com",
            firstName: "Ashish",
            lastName: "Srivastava",
            organisation: "Compunnel Inc",
            profilePic: "abc",
            currentLocation: "Noida"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.user.id).toBe(9);
        expect(res.body.user.firstName).toBe("Ashish");
    })

})
// describe("/sum" , () => {
//     test("should return correct output" , async () => {
//         const res = await request(app).post("/api/v1/user/sum").send({
//             a: 1,
//             b: 2
//           });
//           expect(res.body.answer).toBe(3);
//     })
// })