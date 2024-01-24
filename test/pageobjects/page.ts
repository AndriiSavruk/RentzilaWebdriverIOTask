
class Page {
    public async pause(milliseconds: number): Promise<void> {
        await browser.pause(milliseconds);
      }
    
    public async getElement(element: string | WebdriverIO.Element): Promise<WebdriverIO.Element> {
        return await $(element);
      }

    public async click(element: string | WebdriverIO.Element): Promise<void> {
        await (await this.getElement(element)).click();
      }
      
    public async getText(element: string | WebdriverIO.Element): Promise<string> {
        // await this.waitUntilElementDisplayed(element);
        return (await this.getElement(element)).getText();
      }
}

export default Page;