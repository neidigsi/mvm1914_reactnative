/**
 * This method is used for all http-requests to the api.
 * 
 * First it checks and renews the jwt. Then it send the request to the backend. 
 * It also handles the mandant, which means, all calls of this method should not
 * include any kind of mandant!
 * 
 * @author [Simon Neidig](https://github.com/neidigsi/)
 * @param {String} path The api-request-path
 * @param {String} method The method, which should be executed
 * @param {JSON} body The pody of the request (ignored for "GET"-requests)
 * @returns The result of the api-request. It also contains the response-status as attribute "statusCode".
 */
export async function http(path: string, method: string, body: any) {
    let response;
    if (method === "GET") {
        // Create request without body if it is a get-request
        response = await fetch(path, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } else {
        // Create request with body if it is not a get-request
        response = await fetch(path, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }

    // Send request
    const data = await response.json();

    // Add received statuscode to response of method
    data.statusCode = response.status;

    return data;
}