import { renderHook, act } from '@testing-library/react-hooks';
import useBoolean from '../index';

const setUp = (defaultValue?: boolean) => renderHook(() => useBoolean(defaultValue));

describe('useBoolean', () => {
  it('should be defined', () => {
    expect(useBoolean).toBeDefined();
  });

  it('test on methods', async () => {
    const { result } = setUp();
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1].setTrue();
    });
    expect(result.current[0]).toBeTruthy();
    act(() => {
      result.current[1].setFalse();
    });
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBeTruthy();
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1].set(false);
    });
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1].set(true);
    });
    expect(result.current[0]).toBeTruthy();
  });

  it('test on default value', () => {
    const hook = setUp(true);
    expect(hook.result.current[0]).toBeTruthy();
  });
});
