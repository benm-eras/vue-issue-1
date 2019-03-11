import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

describe('Foo.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Foo, {});
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
