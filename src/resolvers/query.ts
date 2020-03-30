import { IResolvers } from "graphql-tools"

const query: IResolvers = {
    Query: {
        hola(): string {
            return "Hola mundo"
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola Mundo ${nombre}`
        },
        holaAlCursoGraphQl(): string {
            return "Hola mundo en el ultimo pedido"
        }
    }
}

export default query