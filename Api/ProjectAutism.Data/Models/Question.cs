﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("question")]
public class Question
{
    [Column("question_id")]public int Id { get; init; }
    [Column("question_text")]public string QuestionText { get; set; }
}