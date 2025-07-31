import { VariableInJsx } from'./VariableInJsx'
import { ConditionInJsx } from './ConditionInJsx'
import { FunctionInJsx } from './FunctionInJsx'
function  App() {
    return(
        <div>
            {/*inside curly braces we write java script expression */}
            {}
            <p> {2+6} </p>

            <VariableInJsx/>
            <ConditionInJsx/>
            <FunctionInJsx/>
        </div>
        
    )
}

export { App }
