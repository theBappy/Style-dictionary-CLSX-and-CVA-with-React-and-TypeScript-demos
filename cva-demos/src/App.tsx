import Button from "./components/Button"


const App = () => {
  return (
    <div className="space-y-4">
      <Button color="primary" size="large">Primary Large Button</Button>
      <Button color="secondary" size="small">Secondary Small Button</Button>
      <button color="primary" size="small" state="disabled">Disabled Button</button>
    </div>

  )
}

export default App