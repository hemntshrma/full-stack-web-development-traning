import { VariableInJsx } from'./VariableInJsx'
import { ConditionInJsx } from './ConditionInJsx'
function  App() {
    return(
        <div>
            {/*inside curly braces we write java script expression */}
            {}
            <p> {2+6} </p>

            <VariableInJsx/>
            <ConditionInJsx/>
        </div>
        
    )
}

export { App }
