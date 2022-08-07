import useKeyPress from "../../hooks/useKeyPress";
import { renderHook, act } from "@testing-library/react-hooks";



/** **/
describe("useKeyPress", () => {
  it("should return an empty array at initialization", () => {
    const { result } = renderHook(() => useKeyPress());
    expect(result.current.pressedKeys).toEqual([]);
  });

  it("should add a key to pressedKeys on `setPressedKey`", () => {
    const { result } = renderHook(() => useKeyPress());

    act(() => result.current.setPressedKey("k"));

    expect(result.current.pressedKeys).toHaveLength(1);
    expect(result.current.pressedKeys).toContain("k");
  });
});