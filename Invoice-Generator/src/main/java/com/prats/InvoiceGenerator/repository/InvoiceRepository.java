package com.prats.InvoiceGenerator.repository;

import com.prats.InvoiceGenerator.entity.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    
}
