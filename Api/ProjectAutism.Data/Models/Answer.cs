﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("answer")]
public class Answer
{
    [Column("answer_id")]public int Id { get; init; }
    [Column("question_id")]public int? QuestionId { get; set; }
    [Column("answer_text")]public string? Text { get; set; }
    [Column("value")]public int Value { get; set; }
    
}