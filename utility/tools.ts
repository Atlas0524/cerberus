/**
 * Tools for the Cerberus framework
 */
export class Tools {
    /**
     * Remove the BaseURL from a given URL
     */
    public async removeBaseURL(baseURL: string, urlToEdit: string) {
        return urlToEdit.replace(baseURL, '');
    }

}
