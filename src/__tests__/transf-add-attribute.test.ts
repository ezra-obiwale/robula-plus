import { RobulaPlus } from '../index';

const robulaPlus: RobulaPlus = new RobulaPlus();

test('transfAddAttribute: xPath head has already a predicate', () => {
    let xPath: string = '//div[bar]';
    let element: Element = document.createElement('div');
    expect(robulaPlus.transfAddAttribute(xPath, element)).toEqual([]);
});

test('transfAddAttribute: Element has 2 attributes and appendix, xPath head has already a predicate', () => {
    let xPath = '//div[bar]/span';
    let element: Element = document.createElement('div');
    element.setAttribute('class', 'foo');
    element.setAttribute('id', 'bar');
    expect(robulaPlus.transfAddAttribute(xPath, element)).toEqual([]);
});

test('transfAddAttribute: Element has 1 Attribute and appendix', () => {
    let xPath: string = '//div/span';
    let element: Element = document.createElement('div');
    element.innerHTML = '<span></span>';
    element.setAttribute('class', 'foo');
    expect(robulaPlus.transfAddAttribute(xPath, element)).toEqual(["//div[@class='foo']/span"]);
});

test('transfAddAttribute: Element has 2 Attributes and appendix', () => {
    let xPath: string = '//div/span';
    let element: Element = document.createElement('div');
    element.innerHTML = '<span></span>';
    element.setAttribute('class', 'foo');
    element.setAttribute('id', 'bar');
    expect(robulaPlus.transfAddAttribute(xPath, element)).toEqual(["//div[@class='foo']/span", "//div[@id='bar']/span"]);
});

test('transfAddAttribute: Element has no Attributes', () => {
    let xPath: string = '//div';
    let element: Element = document.createElement('div');
    expect(robulaPlus.transfAddAttribute(xPath, element)).toEqual([]);
});