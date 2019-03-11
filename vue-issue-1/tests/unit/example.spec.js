import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

describe('Foo.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Foo, {});
  });

  it("definitely has refs", () => {
    expect(wrapper.vm.$refs.root).to.exist;
    expect(wrapper.vm.$refs.child).to.exist;
    expect(wrapper.vm.$refs.defaultSlot).to.exist;
    expect(wrapper.vm.$refs.namedSlot).to.exist;
  });

  it('can find root', () => {
    expect(wrapper.find({ ref: "root" }).isVueInstance()).to.be.true; // fails
  });

  it('can find child', () => {
    expect(wrapper.find({ ref: "child" }).isVueInstance()).to.be.true; // passes
  });

  it('can find defaultSlot', () => {
    expect(wrapper.find({ ref: "defaultSlot" }).isVueInstance()).to.be.true; // fails
  });

  it('can find namedSlot', () => {
    expect(wrapper.find({ ref: "namedSlot" }).isVueInstance()).to.be.true; // fails
  });
})
