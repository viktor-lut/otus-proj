const assert = require('assert');
const ContactForm = require('./contact-form');
const expect = require('chai').expect;

describe('ContactForm', () => {
    describe('#emailField', () => {
        it('should set value', () => {
            const pageObject = new ContactForm();

            pageObject.typeInEmailField('example@example.com')

            assert.equal(pageObject.emailField, 'example@example.com');
        });

        it('should be clear after form sending', () => {
            // arrange
            const pageObject = new ContactForm();

            // act
            pageObject.typeInEmailField('example@example.com')
            pageObject.sendForm()

            // assert
            expect(pageObject.emailField).is.empty;
        });

        it('flag isSent should be true', () => {
            // arrange
            const pageObject = new ContactForm();

            // act
            pageObject.typeInEmailField('example@example.com')
            pageObject.sendForm()

            // assert
            assert(pageObject.isSent, true);
        });
    });
});
