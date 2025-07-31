package com.prats.InvoiceGenerator.service;

import com.prats.InvoiceGenerator.entity.Invoice;
import com.prats.InvoiceGenerator.repository.InvoiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;

    public Invoice saveInvoice(Invoice invoice) {
       return invoiceRepository.save(invoice);
    }
}
