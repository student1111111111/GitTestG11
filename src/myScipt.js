{
    let a = parseInt(prompt('Введіть а', '2'))
    let b = parseInt(prompt('Введіть b', '3'))
    let s = a + b
    let p = a * b

    document.write(`
    <table>
       <tr>
          <td>
             Sum
          </td>
          <td>
             Prod
          </td>
       </tr>
       <tr>
          <td>
             ${s}
          </td>
          <td>
             ${p}
          </td>
       </tr>

    </table>
    `)

}