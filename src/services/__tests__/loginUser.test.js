import "whatwg-fetch";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import loginUser from '../../requests/loginUser';

// server intercepts the POST request and uses request handlers
// with ctx to build out the response.
const server = setupServer(
    rest.get("http://localhost:3000/api/signin", (req, res, ctx) => {
        return res(
            ctx.status(200)
        );
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Successfully logs in a user", async () => {
    
    const user = {
        email: 'test@mail.com',
        password: 'testpass'
    };

    const res = await loginUser();
    expect(res.status).toBe(200);
});