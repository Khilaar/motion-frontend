import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../Styles/ButtonStyles";
import { addToCountByOne } from "../../Store/Slices/counterSlice";



function CounterTest() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count.count);

    const countFunction = () => {
    dispatch(addToCountByOne());
    };

    return (
        <>
            <h3>Just testing redux</h3>

            <StyledButton onClick={countFunction}>Count +1</StyledButton>

            <p>Count: {count}</p> 
        </>
    )
}

export default CounterTest