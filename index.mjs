import BaseElement from '@enhance-labs/base-element'
import TemplateMixin from '@enhance/template-mixin'
import CustomElementMixin from '@enhance-labs/custom-element-mixin'

export default class CustomElement extends CustomElementMixin(TemplateMixin(BaseElement)) {}
