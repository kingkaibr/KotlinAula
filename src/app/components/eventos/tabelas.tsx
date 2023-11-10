import Evento from "@/core/Evento"
import { editIcon, trashIcon } from "../icones/tabelas"
interface TabelaProps {
    eventos: Evento[]
}


export default function Tabela(props: TabelaProps) {
    //… [Adicionar as funções do próximo slide aqui]
     return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100 bg-gradient-to-r from-indigo-500 to-indigo-800`}>
                {renderHeader()} 
            </thead>
            <tbody>
                {renderDados()} 
            </tbody>
        </table>
        )
        function renderHeader() {
            return (
                <tr>
                    <th className="text-left p-3">id</th> 
                    <th className="text-left p-3">nome</th> 
                    <th className="text-left p-3">data</th> 
                    <th className="text-left p-3">descricao</th> 
                    <th className="text-left p-3">status</th>
                    <th className="text-left p-3">ações</th>
             </tr>)
        }
        function renderDados() {
            return props.eventos?.map((evento, i) => {
                return ( 
                    <tr key={evento.id} className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                        <td className="text-left p-3">{evento.id}</td> 
                        <td className="text-left p-3">{evento.nome}</td> 
                        <td className="text-left p-3">{evento.data}</td>
                        <td className="text-left p-3">{evento.descricao}</td> 
                        <td className="text-left p-3">{evento.status}</td>
                        {renderizarAcoes(evento)}
                    </tr>)
             })}

        function renderizarAcoes(evento: Evento) {
            return (
                <td className="flex">
                    <button className={`flex justify-center items
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-gray-100`}>{editIcon}</button>
                    <button className={`flex justify-center items
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-gray-100`}>{trashIcon}</button>
                </td>
            )
        }
}
 
