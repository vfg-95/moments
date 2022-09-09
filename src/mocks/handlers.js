import { rest } from "msw"

const baseURL = "https://drfapi-moments.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
            "pk": 3,
            "username":
            "testuser3",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 3,
            "profile_image": "https://res.cloudinary.com/dunltodav/image/upload/v1/media/images/Screenshot_2022-09-08_at_12.25.57_dswyxu"
            })
        )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];