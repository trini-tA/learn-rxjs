import { Injectable } from '@nestjs/common';

@Injectable()
export class PromiseService {
  protected errorMessage = 'Empty message !';

  async transformToUpper(message: string): Promise<string> {
    try {
      return await this.messageToUpper(message);
    } catch (error) {
      return error;
    }
  }

  async transfromToUpperString(data: any): Promise<string> {
    try {
      const results = await this.convertData(data);

      data.chain = results;
      // format result to display
      return (
        'Results:: <pre style="background-color: lightgrey; padding: 2em 0">' +
        results +
        '</pre>' +
        'Data:: <pre style="background-color: lightgrey; padding: 2em 0">' +
        JSON.stringify(data) +
        '</pre>'
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async convertData(data: any): Promise<any> {
    const promises = [];
    if (data.id > 0) {
      if (data.messages.length > 0) {
        data.messages.forEach((element) => {
          promises.push(this.messageToUpper(element.title));
        });
      }
    }

    return Promise.all(promises);
  }

  /**
   *
   * @param message
   * @returns
   */
  protected messageToUpper(message: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      if (message != '') {
        resolve(message.toUpperCase());
      } else {
        reject('Error !!!');
      }
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /// it's work!
  async displayUser(idUser) {
    try {
      return await this._getUserData(idUser);
    } catch (error) {
      return null;
    }
  }

  async _getUserData(id) {
    const user = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            { id: id, name: 'superTotoTiti' },
            { id: 2, name: 'Titi' },
          ]),
        1000,
      ),
    );

    return user;
  }
}
