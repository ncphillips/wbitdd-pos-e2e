import React, { useState } from "react"
import { Field, Form } from "react-final-form"

export default function HomePage() {
  const [todos, setTodos] = useState<string[]>([])
  return (
    <>
      <Form
        onSubmit={({ text }, form) => {
          setTodos([text])
          form.reset()
        }}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>
                New Task
                <Field name="text" component="input" />
              </label>
            </form>
          )
        }}
      </Form>
      <h2 id="tasks-heading">Tasks</h2>
      <ul aria-labelledby="tasks-heading">
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  )
}
