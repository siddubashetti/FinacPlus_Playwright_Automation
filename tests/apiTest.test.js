// free_user_3DagXwjs0PVSt7SjvoqUESa7ivx
import { test, expect } from '@playwright/test';

test('Create User API Test', async ({ request }) => {

    // =========================
    // Create a user, validate the response http status code. Fetch and store userId.
    // =========================
    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
        },
        data: {
            name: 'Siddu',
            job: 'QA Engineer'
        }
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log('create user response', responseBody);

    // to fetch the user ID and store
    const userId = responseBody.id;
    console.log('User store ID:', userId);

    // Get the created user details and validate the same.
    expect(responseBody.name).toBe('Siddu');
    expect(responseBody.job).toBe('QA Engineer');


    // =========================
    // Get the created user details and validate the same.
    // =========================
    const getUserResponse = await request.get(`https://reqres.in/api/users/${userId}`, {
        headers: {
            'x-api-key': "free_user_3DagXwjs0PVSt7SjvoqUESa7ivx"
        }
    });
    console.log('Get User Status:', getUserResponse.status());
    const getUserResponseBody = await getUserResponse.json();
    console.log('get user response:', getUserResponseBody);


    // =========================
    // Update user's name, and validate the same.
    // =========================
    const updateUserResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
        headers: {
            'x-api-key': 'free_user_3DagXwjs0PVSt7SjvoqUESa7ivx'
        },
        data: {
            name: 'Siddu Updated',
            job: 'Senior QA Engineer'
        }

    });
    console.log('Update User Status:', updateUserResponse.status());
    const updateUserResponseBody = await updateUserResponse.json();
    console.log('Update User Response:', updateUserResponseBody);
    expect(updateUserResponseBody.name).toBe('Siddu Updated');
    expect(updateUserResponseBody.job).toBe('Senior QA Engineer');
});