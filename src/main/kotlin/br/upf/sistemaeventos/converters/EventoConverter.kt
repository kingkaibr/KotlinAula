package br.upf.sistemaeventos.converters

import br.upf.sistemaeventos.dtos.EventoDTO
import br.upf.sistemaeventos.dtos.EventoResponseDTO
import br.upf.sistemaeventos.model.Evento
import org.springframework.stereotype.Component

@Component
class EventoConverter {
    fun toEvento(dto: EventoDTO): Evento {
        return Evento(
            nome = dto.nome,
            data = dto.data,
            dataInicioInsc = dto.dataInicioInsc,
            dataFimInsc = dto.dataFimInsc,
            descricao = dto.descricao,
            status = dto.status,
            inscritos = listOf()
        )
    }

    fun toEventoResponseDTO(evento: Evento): EventoResponseDTO {
        return EventoResponseDTO(
            id = evento.id,
            nome = evento.nome,
            data = evento.data,
            dataInicioInsc = evento.dataInicioInsc,
            dataFimInsc = evento.dataFimInsc,
            descricao = evento.descricao,
            status = evento.status,
            inscritos = evento.inscritos
        )
    }
}